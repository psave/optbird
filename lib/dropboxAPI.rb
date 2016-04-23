require 'bundler/setup'
require 'dropbox_sdk'

# @client = DropboxClient.new(ENV['DROPBOX_ACCESS_TOKEN'])

### For new files in the Dropbox ###
class DropboxUtility

  def initialize(access_token)
    @client = DropboxClient.new(access_token)
  end

  def changed_files(path)
    delta_occupancy = @client.delta(cursor=nil, path_prefix=path)
    delta_occupancy["entries"].select { |entry| 
      !entry[1]["is_dir"] 
    }.map { |entry| 
      entry[0]
    }.map { |path| 
      @client.get_file(path)
    }
  end

end
# @occupancy_csvs = contents_at_path('/occupancy')
# @new_courses_csvs = contents_at_path('/course_schedule')


##########################################################

### For all files in the Dropbox ###

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



