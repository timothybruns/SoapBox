module Api
  class BooksController < ApplicationController
    def index
      user = User.find_by(id: params[:user_id])
      if user
        @books = user.books
      else
        @books = Book.all
      end
      render json: {
        data: {
          books: @books
        }
      }
    end

    # def by_user
    #   byebug
    #   user = User.find(params[:user_id])
    #   @books = user.books
    #   render json: {
    #     data: {
    #       books: @books
    #     }
    #   }
    # end

    def show
      @book = Book.find(params[:id])
      render json: {
        data: {
          books: @books
        }
      }
    end

    def new
      @book = Book.new
    end

    def edit
      @book = Book.find(params[:id])
      render json: {
        data: {
          books: @books
        }
      }
    end

    def create
      params[:book][:user_id] = params[:user_id]
      @book = Book.new(book_params)

      if @book.save
        render json: {
          data: {
            book: @book
          }
        }
      else
        render json: {
          success: false,
          errors: @book.errors
        }
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
    if @book.destroy
      render json: {
        data: {
          book: @book
        }
      } else redirect_to books_path
    end
  end

      private
        def book_params
          params.require(:book).permit(:title, :author, :genre, :review, :user_id)
      end
  end
end
