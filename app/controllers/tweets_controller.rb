class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if request.xhr?
      respond_to do |format|
        format.html do
          if @tweet.save
          render partial: 'tweet', locals: {tweet: @tweet}
          else
          end
        end
        format.json do
          if @tweet.save
          render json: {
            'message': @tweet.message,
            'created_at': @tweet.created_at.strftime('%b %e, %l:%M %p')
          }
          else
          end
        end
      end
    else
      if @tweet.save
        redirect_to tweets_path
      else
        render :index
      end
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
