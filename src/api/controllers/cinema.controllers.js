 const cinema = require('../models/cinema.models');

 const getCinema = async (req,res) =>{ 
    try {
        const allCinemas = await cinema.find();
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
  };

  const getCinemaById = async (req, res) => {
    console.log(req.params);
    try {
        const {id} = req.params;
        const cinemaSearch = await cinema.findById(id).populate('movies');
        if(!cinemaSearch){
            return res.status(404).json({"message":"Cinema not found"});
        }
        return res.status(200).json(cinemaSearch);
    } catch (error) {
        return res.status(500).json(error);
    }
  }

 const postCinema =  async (req,res) =>{ 
    try {
        console.log(req.body );
        const newCinema = new cinema(req.body);

        const createCinema = await newCinema.save();
        return res.status(201).json(createCinema); 
    } catch (error) {
        return res.status(500).json(error);
    }
  };

 const putCinema =  async (req,res) =>{ 
    try {
        const {id} = req.params;
        const putCinema = new cinema(req.body);
        putCinema._id = id;
        const updateCinema = await cinema.findOneAndUpdate(id, putCinema,{new: true});

        if(!updateCinema){ 
            return res.status(404).json({"message":"Cinema not found"});
        }
        return res.status(200).json(updatCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
  };

 const deleteCinema =  async (req,res) =>{ 
    try {
        const {id} = req.params;
        const deleteCinema = await cinema.findOneAndDelete(id);

        if(!deleteCinema){
            return res.status(404).json({"message":"Cinema not found"});
        }
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
  };

 module.exports = {getCinema, postCinema, putCinema, deleteCinema, getCinemaById};