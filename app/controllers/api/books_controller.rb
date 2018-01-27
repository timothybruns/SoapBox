module Api
  class BooksController < ApplicationController
    def index
      @books = Book.all
      render json: {
        data: {
          books: @books
        }
      }
    end

    def show
      @book = Book.find(params[:id])
    end

    def new
      @book = Book.new
    end

    def edit
      @book = Book.find(params[:id])
    end

    def create
      # if current_user
      #   params[:book][:user_id] = current_user.id
      # end
      # puts book_params
      @book = Book.new(book_params)

      if @book.save
        render json: {
          data: {
            book: @book
          }
        }
      else
        render 'new'
      end
    end

  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      redirect_to @book
    else
      render 'edit'
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy

    redirect_to books_path
  end

      private
        def book_params
          params.require(:book).permit(:title, :author, :genre, :review, :user_id)
      end
  end
end
