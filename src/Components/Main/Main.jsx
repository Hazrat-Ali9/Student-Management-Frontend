
import SearchBox from './SearchBox/SearchBox';
import StudentsTable from './StudentsTable/StudentsTable';

const Main = () => {
    return (
        <div className="py-24 lg:pt-[120px] lg:pb-28">

            <div className='container'>
                <SearchBox></SearchBox>
                <StudentsTable></StudentsTable>
            </div>

        </div>
    );
};

export default Main;