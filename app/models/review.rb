# == Schema Information
#
# Table name: reviews
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  business_id        :integer          not null
#  rating             :integer
#  body               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Review < ApplicationRecord
  validates :user_id, :business_id, :rating, :body, presence: true

  belongs_to :user
  belongs_to :business

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
