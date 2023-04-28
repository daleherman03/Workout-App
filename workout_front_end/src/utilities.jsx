import axios from 'axios';


export const signUp = async(name, email, password) => {
    let response = await axios.post('/user/users/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}


export const logIn = async(email, password, setUser) => {
    let response = await axios.put('/user/users/', {
        'email' : email,
        'password' : password
    })

    setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('/user/users/')
    console.log(response.data)
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/user/users/')
    if(response.data.logout){
        setUser(null)
    }
}

export const searchByName = async(name) => {
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '8a3fedd696mshebdd267afb94940p16fa4ajsn9bad1d29ee2d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      };
};

export const searchByMuscle = async(muscle) => {
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '8a3fedd696mshebdd267afb94940p16fa4ajsn9bad1d29ee2d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }
      
};

export const searchByBodyPart = async(bodyPart) => {
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '8a3fedd696mshebdd267afb94940p16fa4ajsn9bad1d29ee2d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }
};

export const submitLog = async (workoutData) => {
    try {
        const response = await axios.post('/user/log/', workoutData);
        console.log(response.data.success);
        return response.data.success;
    } catch (error) {
        console.error(error);
    }
};