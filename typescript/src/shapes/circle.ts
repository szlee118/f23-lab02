import {Shape} from './shape.js'

function circle(radius: number): Shape {
    return{
        computeArea(): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
