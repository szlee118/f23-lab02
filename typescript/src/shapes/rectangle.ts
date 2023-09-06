import {Shape} from './shape.js'

function newRectangle(width: number, height: number): Shape {
    return{
        computeArea(): number {
            return width * height
        }
    }
}

export { newRectangle }
