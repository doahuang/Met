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

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
