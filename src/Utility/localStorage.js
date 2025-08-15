
const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-Applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.some(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-Applications', JSON.stringify(storedJobApplications));
        return true; // Successfully saved
    }
}

const getStoredJobApplications = () => {


}

const saveJobApplication = (id) => {

}
export { saveJobApplication}