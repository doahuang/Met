# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  rating      :integer          not null
#  body        :text
#  reviewer_id :integer          not null
#  spot_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, :reviewer_id, :spot_id, presence: true

  belongs_to :spot
  belongs_to :reviewer, class_name: :User
end
