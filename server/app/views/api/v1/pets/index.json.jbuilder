json.array!(@pets) do |pet|
  json.id pet.id
  json.owner_name pet.owner_name
  json.pet_name pet.pet_name
  json.description pet.description
  json.age pet.age
  json.address pet.address
  json.contacts pet.contacts
  json.status Pet.statuses[pet.status]
  json.last_seen_coords pet.last_seen_coords
  json.pictures_url pet.pictures.map { |pic| pic.url }
end
