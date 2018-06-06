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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
