require 'bundler/setup'
require 'dropbox_sdk'
require 'dotenv'
Dotenv.load

client = DropboxClient.new(ENV['DROPBOX_ACCESS_TOKEN'])

contents, metadata = client.get_file_and_metadata('/IBLC_182_courses.csv')
open('IBLC_182_courses.csv', 'w') { |f| f.puts contents }