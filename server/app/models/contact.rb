class Contact < ApplicationRecord
  before_create :filter_number

  has_one :pet

  private

  def filter_number
    self.phone_number = self.phone_number.scan(/\+\d+|\d+/).join('')
  end
end
