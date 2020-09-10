json.array!(@pets) do |pet|
  json.id pet.id
  json.pet_name pet.pet_name
  json.age pet.age
  json.address pet.address
  json.status Pet.statuses[pet.status]
  json.picture_url pet.pictures[0].url if pet.pictures.size >= 1
end
