export const sendTest = async(req, res) =>{
    try {
        res.status(200).send("<h1>Test</h1>");
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};