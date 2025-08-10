import FAQ from '../../components/StudentPage/FAQ';
import AppCard from '../../components/StudentPage/AppCard';
import StudentHeader from '../../components/StudentPage/StudentHeader';
import TraitCard from '../../components/StudentPage/TraitCard';

function StudentPage() {
    return (
        <div className='flex flex-col ml-[132.7px] mr-[118.7px] small-screen-comp'>
            <StudentHeader />
            <AppCard />
            <TraitCard />
            <FAQ />
        </div>
    )
}

export default StudentPage;