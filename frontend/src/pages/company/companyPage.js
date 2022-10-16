import axios from "axios"

function CompanyPage(){
    const token = localStorage.getItem('token')
    const comId = localStorage.getItem('id')
    console.log(comId)
    axios.get(`http://localhost:4000/companies/${comId}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
export default CompanyPage