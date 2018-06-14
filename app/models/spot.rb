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
  # include PgSearch
  # pg_search_scope :search,
  #                 :against => [:name, :description],
  #                 :ignoring => :accents,
  #                 :using => {
  #                   :tsearch => {:prefix => true}
  #                 }

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
    matches = []
    Spot.all.each do |spot|
      name = spot.name[0...word.length]
      matches.push(spot) if spot.name.downcase.match?(word)
    end

    matches;
  end
end
