class SynopsisController < ApplicationController
  def index
  end

  def create
    @synopsis = Synopsis.new(synopsis_params)
    if @synopsis.save
      pdf = Prawn::Document.new

      pdf.text "#{@synopsis.title}", size:16, style: :bold, align: :center

      pdf.text "Characters: #{@synopsis.characters}", size:12, style: :bold, leading: 2.0

      pdf.text "#{@synopsis.main_conflict}", size:12, leading: 2.0
      pdf.text "#{@synopsis.paragraph1}", size:12, leading: 2.0
      pdf.text "#{@synopsis.paragraph2}", size:12, leading: 2.0
      pdf.text "#{@synopsis.paragraph3}", size:12, leading: 2.0
      pdf.text "Email: #{@synopsis.email}", size:10, leading: 2.0

      pdf_filename = "#{@synopsis.title.parameterize}.pdf"
      pdf_path = Rails.root.join('public', 'pdfs', pdf_filename)
      pdf.render_file(pdf_path)

      render json: { pdf_url: pdf_path(filename: @synopsis.title.parameterize) }, status: :created
    else
      render json: { errors: @synopsis.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def show_pdf
    pdf_filename = "#{params[:filename]}.pdf"  # Expecting a filename parameter
    pdf_path = Rails.root.join('public', 'pdfs', pdf_filename)

    if File.exist?(pdf_path)
      send_file pdf_path, type: 'application/pdf', disposition: 'inline'
    else
      render json: { error: 'PDF not found' }, status: :not_found
    end
  end



  private
  def synopsis_params
    params.require(:synopsis).permit(:title, :characters, :main_conflict, :paragraph1, :paragraph2, :paragraph3, :email)
  end
end
