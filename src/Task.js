import React from 'react';

export default({task, markTaskDone}) => {
    return(
        <p>
            {task.done ? (
                <span style={{textDecoration: 'line-through'}}>
                    {task.description}
                </span>
            ) : task.description}
            <br />
            <div className="btn-group mr-2" >
                {task.done ? null : (
                    <button type="button" className="btn btn-success" 
                    onClick={() => markTaskDone(task.id)}>Done</button>
                )}
                
            </div>           
        </p>

    );
}
 