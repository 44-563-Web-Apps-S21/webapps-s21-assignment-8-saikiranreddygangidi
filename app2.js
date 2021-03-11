const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write( ' <table><tr><th>LOCATION</th>')
      res.write( '   <th>NUMBER OF HOURS TO SPEND</th>')
      res.write( '   <th>EXCEPTED MONEY TO PAY</th>')
      res.write( ' </tr>')
      res.write( '<tr>')
      res.write( '    <td>Thar Desert</td>')
      res.write( '   <td>48</td>')
      res.write( '   <td>300 dollars per day</td>')
      res.write( '  </tr>')
     
      
      res.write( '<tr>')
      res.write( '     <td>The ganges</td>')
      res.write( '    <td>24</td>')
      res.write( '    <td>200 dollars per day</td>')
      res.write( '</tr>')
     
     
      res.write( '<tr>')
      res.write( '    <td>Yumthang Valley, Sikkim</td>')
      res.write( '   <td>12</td>')
      res.write( '   <td>250 dollars per day</td>')
      res.write( ' </tr>')
      res.write( ' </table>')
        
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})