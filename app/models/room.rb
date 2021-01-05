class Room < ApplicationRecord
  belongs_to :user
  has_many :reservations, dependent: :destroy

  geocoded_by :room_address
  after_validation :geocode, if: :room_address_changed?
  
  validates :home_type, :room_type, :accomdate, :bedroom, :bathroom, :listing_name, :summary, :address, :city, :state, presence: true
  validates :urls, length: { maximum: 5, message: "Only 5 images are required" }
  validates :listing_name, length: {maximum: 50}, presence: true
  validates :summary, length: {maximum: 5000}, presence: true

  def room_address
    [city, state].compact.join(', ')
  end

  def room_address_changed?
    city_changed? || state_changed?
  end

  def self.search(location)
    if location
      Room.where('address ILIKE ?', '%' + location + '%')
    else
      []
    end
  end
end
