import React from 'react';
import {Cards,Chart,CountryPicker} from './componets'
import styles from './App.module.css'
import {fetchData} from './api'
import logo from './images/logo.png'
class App extends React.Component
{
    state = {
        data : {},
        country : '',
    }
    async componentDidMount()
    {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
        //console.log(fetchedData);
    }
    handleCountryChange = async (country) =>
    {
       const fetchedData = await fetchData(country);
       this.setState({data: fetchedData, country : country});
       //console.log('country data',fetchedData);
    }
    render()
    {
        const {data,country} = this.state;
        return(
        <div className={styles.container}>
            <img className={styles.image} src={logo} alt="bad"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
        )
    }
}
export default App;