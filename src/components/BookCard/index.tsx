import { Book } from "@prisma/client"
import { RatingStars } from "../RatingStars"
import { Text } from "../Typography"
import { BookDetails, BookImage, BookName, Container } from "./styles"

export type BookWithAvgRating = Book & {
    avgRating: number
}

type BookCardProps = {
    book: BookWithAvgRating
    size?: 'md' | 'lg'
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
    const IMAGES_SIZES = {
        md: {
            width: 64,
            height: 94,
        },
        lg: {
            width: 108,
            height: 152,
        },
    }

    const currentSize = IMAGES_SIZES[size]

    return (
        <Container>
            <BookImage 
                width={currentSize.width} 
                height={currentSize.height} 
                src={book.cover_url} 
                alt={book.name} 
                css={{
                    minWidth: currentSize.width
                }}
            />

            <BookDetails>
                <div>
                    <BookName size='xs'>{book.name}</BookName>
                    <Text size='sm' color='gray-400'>{book.author}</Text>
                </div>

                <RatingStars rating={book.avgRating}/>
            </BookDetails>
        </Container>
    )
}