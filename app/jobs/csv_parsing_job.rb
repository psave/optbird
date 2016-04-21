class CsvParsingJob < ActiveJob::Base
  # include Sidekiq::
  queue_as :default

  def perform(*args)
    # Do something later
  end
end
