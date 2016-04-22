require 'bundler/setup'
require 'dropbox_sdk'
require 'dotenv'
Dotenv.load

@client = DropboxClient.new(ENV['DROPBOX_ACCESS_TOKEN'])

### For all files in the Dropbox

# @metadata = @client.metadata('/', file_limit=10, list=true)

# number_of_files = @metadata["contents"].length - 1
# files = []

# for i in 0..number_of_files
#   file = @metadata["contents"][i]["path"]
#   files << file
# end

# files.each do |file|
#   @test = @client.get_file(file)
# end


### For new files in the Dropbox

delta = @client.delta(cursor=nil, path_prefix='/')

delta_path = delta["entries"][0][0]

@new_csv = @client.get_file(delta_path)