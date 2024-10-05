class SynopsisController < ApplicationController
  def index
  end

  def create
    @synopsis = Synopsis.new(synopsis_params)
    if @synopsis.save
      render json: { message: 'Synopsis was successfully created.' }, status: :created
    else
      render json: { errors: @synopsis.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private
  def synopsis_params
    params.require(:synopsis).permit(:characters, :main_conflict, :paragraph1, :paragraph2, :paragraph3, :email)
  end
end
