import React from 'react';
import { getAllInfos } from '../utils/local-data';
import InfoList from '../components/InfoList';
import SearchBar from '../components/SearchBar';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            infos: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    componentDidMount(){
        const { data } = getAllInfos();
        
        this.setState(()=>{
            return {
                infos: data,
            }
        });
    }

    onKeywordChangeHandler(keyword){
        this.setState(()=>{
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render(){
        const filteredInfos = this.state.infos.filter((info)=>{
            return info.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Informasi Sampah</h2>
                <InfoList infos={filteredInfos} />
            </section>
        )
    }
}

export default HomePage;