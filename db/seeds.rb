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
    User.create!(username: Faker::LordOfTheRings.character, password: '123123')
  end

  12.times do
    Spot.create!(
      name: Faker::Hobbit.location,
      image_url: "https://picsum.photos/400/300/?image=#{rand(900..1000)}",
      latitude: rand(0.0..100.0).round(2),
      longitude: rand(0.0..100.0).round(2),
      landscape: %w(volcano village mountain land).sample,
      size: rand(1..100),
      price: rand(1..10000),
      description: 'just some random description',
      owner_id: rand(1..User.count)
    )
  end

  6.times do
    begin_date = Date.new(2018, rand(1..12), rand(1..31))
    Booking.create!(
      begin_date: begin_date,
      end_date: begin_date + rand(1..120),
      guests: rand(1..100),
      booker_id: rand(1..User.count),
      spot_id: rand(1..Spot.count)
    )
  end

  9.times do
    Review.create!(
      rating: rand(1..5),
      body: %w(ok good better best wow).sample,
      reviewer_id: rand(1..User.count),
      spot_id: rand(1..Spot.count)
    )
  end
end
