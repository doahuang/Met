# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all
Booking.destroy_all
Review.destroy_all

ActiveRecord::Base.transaction do
  User.create!(username: 'test', password: '123123')
  3.times do
    user = Faker::LordOfTheRings.character
    User.create!(username: user, password: '123123')
  end

  photos = [980, 984, 985, 989, 994, 988, 982, 987, 990, 992, 986, 991]
  24.times do
    name = [Faker::LordOfTheRings.location, Faker::Hobbit.location].sample
    loc = %w(Lindon Eriador Gondor Rohan Mordor Rhûn Rhovanion).sample
    geo = %w(Volcano Valley Castle Mountain Flatland River Forest).sample
    des = rand(1..5).times.map{ Faker::Hobbit.quote }.join(' ')
    Spot.create!(
      name: name,
      image_url: "https://picsum.photos/1600/900/?image=#{photos.sample}",
      location: loc,
      latitude: rand(-90.0..90.0),
      longitude: rand(-180.0..180.0),
      landscape: geo,
      size: rand(1..100),
      price: rand(1..10000),
      description: des,
      owner_id: rand(User.first.id..User.last.id)
    )
  end

  24.times do
    start_date = Date.new(2018, rand(1..12), rand(1..28))
    Booking.create!(
      start_date: start_date,
      end_date: start_date + rand(1..365),
      guests: rand(1..10),
      booker_id: rand(User.first.id..User.last.id),
      spot_id: rand(Spot.first.id..Spot.last.id)
    )
  end

  48.times do
    Review.create!(
      rating: rand(1..3),
      body: Faker::Hobbit.quote,
      reviewer_id: rand(User.first.id..User.last.id),
      spot_id: rand(Spot.first.id..Spot.last.id)
    )
  end
end
