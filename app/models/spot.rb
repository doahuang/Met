# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  image_url   :string           not null
#  location    :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  landscape   :string           not null
#  size        :integer          not null
#  price       :integer          not null
#  description :text
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_pg,
                  :against => [:name, :location, :landscape, :size, :price],
                  :using => {
                    :tsearch => {:prefix => true, :any_word => true}
                  }

  validates :name, :image_url, :location,
            :latitude, :longitude, :landscape,
            :size, :price, :owner_id, presence: true
  validate :positive_num

  belongs_to :owner, class_name: :User
  has_many :bookings
  has_many :reviews
  has_many :bookers, through: :bookings, source: :booker
  has_many :reviewers, through: :reviews, source: :reviewer

  def positive_num
    return if !size || !price
    return if size > 0 && price >= 0
    errors[:base] << 'Invalid size or price'
  end

  def self.in_bounds(bounds)
    min_lat = bounds['southWest']['lat']
    max_lat = bounds['northEast']['lat']
    min_lng = bounds['southWest']['lng']
    max_lng = bounds['northEast']['lng']

    Spot.where(latitude: min_lat..max_lat)
        .where(longitude: min_lng..max_lng)
  end

  def self.search(word)
    search_by_pg(word) + search_patch(word)
  end

  def self.search_patch(word)
    matches = []
    Spot.all.each do |spot|
      matches << spot if
      [spot.name, spot.location].any?{ |el| el.downcase.match?(word.downcase) }
    end
    matches;
  end
end
