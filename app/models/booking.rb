# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  guests     :integer          not null
#  booker_id  :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :start_date, :end_date, :guests,
            :booker_id, :spot_id, presence: true
  validate :date_range

  belongs_to :booker, class_name: :User
  belongs_to :spot

  def date_range
    return if !start_date || !end_date
    return if start_date <= end_date #&& start_date >= Date.today
    errors[:base] << 'Invalid date range'
  end
end
