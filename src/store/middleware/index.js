export default function forbidden({dispatch}) {
    return function(next){
        return function(action) {
            console.log(`Logged Actions: ${action}`);
            return next(action);
        }
    }
}