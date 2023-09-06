import {Shape} from './shape.js'

function square(sideLen: number): Shape {
    return{
        computeArea(): number {
            return sideLen * sideLen
        }
    }
    
}

export { square }