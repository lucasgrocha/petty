class Pet < ApplicationRecord
  enum status: { lost: 0, adoption: 1 }
  mount_uploaders :pictures, PetPictureUploader
  before_create :convert_coords_to_number

  belongs_to :contact

  def contacts
    {
      phone_number: contact.phone_number,
      email: contact.email
    }
  end

  private

  def convert_coords_to_number
    self.last_seen_coords = last_seen_coords.map(&:to_f) unless last_seen_coords.nil?
  end
end
