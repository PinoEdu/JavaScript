async function requestHandler(request, response){
    try{
        const user = await User.findById(request.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.complted = true;
        await tasks.save();
        response.send('Task Completed');
    }
    catch(e){

    }
}