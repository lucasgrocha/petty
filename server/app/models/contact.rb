class Contact < ApplicationRecord
  before_create :filter_number

  has_one :pet

  private

  def filter_number
    self.whatsapp = self.whatsapp.scan(/\+\d+|\d+/).join('')
  end
end
