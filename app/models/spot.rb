# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  image_url   :string
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
                  :against => [:name, :landscape, :size, :price],
                  :using => {
                    :tsearch => {:prefix => true, :any_word => true}
                  }

  validates :name, :latitude, :longitude, :landscape,
            :size, :price, :owner_id, presence: true

  belongs_to :owner, class_name: :User
  has_many :bookings
  has_many :reviews
  has_many :bookers, through: :bookings, source: :booker
  has_many :reviewers, through: :reviews, source: :reviewer

  def location
    %w(Lindon Eriador Gondor Rohan Mordor Rhûn Rhovanion).sample
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
    search_by_pg(word)
    search_fixup(word)
  end

  def self.search_fixup(word)
    matches = []
    Spot.all.each do |spot|
      if [spot.name, spot.landscape].any?{ |el| el.downcase.match?(word.downcase) }
        matches << spot
      end
    end
    matches;
  end
end
