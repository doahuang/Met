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
    user = [Faker::LordOfTheRings.character, Faker::Hobbit.character].sample
    User.create!(username: user, password: '123123')
  end

  12.times do
    loc = [Faker::LordOfTheRings.location, Faker::Hobbit.location].sample
    geo = %w(Volcano Valley Village Tower Mountain Flatland Cave Castle Forest).sample
    des = rand(1..5).times.map{ Faker::Hobbit.quote }.join(' ')
    Spot.create!(
      name: loc,
      image_url: "https://picsum.photos/1600/900/?image=#{rand(980..995)}",
      latitude: rand(0.0..100.0).round(2),
      longitude: rand(0.0..100.0).round(2),
      landscape: geo,
      size: rand(1..100),
      price: rand(1..10000),
      description: des,
      owner_id: rand(User.first.id..User.last.id)
    )
  end

  15.times do
    begin_date = Date.new(2018, rand(1..12), rand(1..28))
    Booking.create!(
      begin_date: begin_date,
      end_date: begin_date + rand(1..120),
      guests: rand(1..100),
      booker_id: rand(User.first.id..User.last.id),
      spot_id: rand(Spot.first.id..Spot.last.id)
    )
  end


  30.times do
    Review.create!(
      rating: rand(1..5),
      body: Faker::Hobbit.quote,
      reviewer_id: rand(User.first.id..User.last.id),
      spot_id: rand(Spot.first.id..Spot.last.id)
    )
  end
end
