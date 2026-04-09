import React, { useState, useEffect } from 'react';
import './index.css';

// SVG Icons
const BellIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const TrashIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const PlusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const PaperAirplaneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const CogIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.341 3.897c.287-1.42 2.03-1.42 2.318 0 .151.748.974 1.255 1.706 1.053.714-.197 1.488.293 1.666.993.18.706.87 1.157 1.58.972.738-.192 1.463.36 1.579 1.111.112.724.795 1.196 1.518 1.055.76-.148 1.34.469 1.408 1.229.065.733.67 1.258 1.396 1.22.766-.04 1.22.656 1.127 1.405-.09.723.368 1.353 1.055 1.442.75.097 1.026.852.816 1.554-.202.673.125 1.385.76 1.636.65.257.755 1.066.398 1.71-.343.619-.208 1.37.337 1.78.563.425.485 1.218-.088 1.794-.555.556-.554 1.365.176 1.834.757.48.51 1.298-.222 1.758-.707.447-.98 1.062-1.282 1.722-.313.684.148 1.44-.57 1.747-.696.297-1.212.836-1.503 1.439-.302.624-1.042.846-1.74.453-.615-.347-1.393-.112-1.798.487-.418.618-1.246.736-1.84.214-.576-.505-1.378-.456-1.879.13-.518.607-1.34.502-1.875-.152-.516-.628-1.1-1.12-1.332-.478-.224-1.026.113-1.46.216-.421.099-1.077-.423-1.09-1.218-.013-1.015-1.015-1.015-2.03 0-.013.795-.669 1.317-1.09 1.218-.434-.103-.982-.44-1.46-.216-.492.232-.816.816-1.332 1.12-.535.315-1.357.518-1.875.13-.501-.326-1.303-.375-1.879-.13-.594.273-1.422.155-1.84-.214-.405-.359-1.183-.594-1.798-.487-.714.126-1.454-.347-1.74-.453-.29-.106-.827-.643-1.503-1.439-.66-.318-1.42-.515-1.747-.696-.306-.168-1.04-.633-1.758-.707-.468-.049-1.272.73-1.834.176-.575-.572-.651-1.369-.088-1.794.545-.41.68-1.161.337-1.78-.357-.644-.252-1.453.398-1.71.635-.251.962-.963.76-1.636-.21-.702.066-1.457.816-1.554.687-.089 1.145-.719 1.055-1.442-.093-.749.36-1.445 1.127-1.405.726.038 1.331-.487 1.396-1.22.068-.76.648-1.377 1.408-1.229.723.141 1.406-.331 1.518-1.055.116-.751.841-1.303 1.579-1.111.71.185 1.4-.266 1.58-.972.178-.7.952-1.19 1.666-.993.732.202 1.555-.305 1.706-1.053z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('engineer-tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', title: 'Review schematic for Controller Board', client: 'Acme Corp', done: false, notify: true },
      { id: '2', title: 'Solder prototype batch', client: 'Personal Project', done: false, notify: false },
      { id: '3', title: 'Client meeting to discuss requirements', client: 'TechFlow', done: false, notify: true }
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newClientName, setNewClientName] = useState('');
  
  // Settings modal state
  const [showSettings, setShowSettings] = useState(false);
  const [pushoverToken, setPushoverToken] = useState(() => localStorage.getItem('pushover-token') || '');
  const [pushoverUser, setPushoverUser] = useState(() => localStorage.getItem('pushover-user') || '');

  // Save to local storage whenever tasks or settings change
  useEffect(() => {
    localStorage.setItem('engineer-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('pushover-token', pushoverToken);
    localStorage.setItem('pushover-user', pushoverUser);
  }, [pushoverToken, pushoverUser]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    const client = newClientName.trim() || 'General';
    
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      client,
      done: false,
      notify: true // Default to wanting notifications for new tasks
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t));
  };

  const toggleTaskNotify = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, notify: !t.notify } : t));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleSendPushover = async () => {
    const notifiableTasks = tasks.filter(t => !t.done && t.notify);
    
    if (notifiableTasks.length === 0) {
      alert("No pending tasks marked for notification.");
      return;
    }

    if (!pushoverToken || !pushoverUser) {
      alert("Please configure your Pushover Token and User Key in Settings first.");
      setShowSettings(true);
      return;
    }
    
    // Group tasks for the message
    const groupedForPush = notifiableTasks.reduce((acc, task) => {
      if (!acc[task.client]) acc[task.client] = [];
      acc[task.client].push(task.title);
      return acc;
    }, {});

    let messageString = "Remaining Tasks Summary:\n\n";
    for (const [client, tls] of Object.entries(groupedForPush)) {
      messageString += `** ${client} **\n`;
      tls.forEach(t => messageString += `- ${t}\n`);
      messageString += "\n";
    }

    try {
      // Use FormData to make a completely simple POST request (no CORS preflight)
      const formData = new FormData();
      formData.append("token", pushoverToken);
      formData.append("user", pushoverUser);
      formData.append("message", messageString.trim());
      formData.append("title", "Engineer Tasks Summary");
      
      // mode 'no-cors' allows simple POSTs but doesn't let us read the response. 
      // The push still triggers successfully!
      await fetch('https://api.pushover.net/1/messages.json', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      alert("Notification summary sent to Pushover successfully! (Check your phone)");
    } catch (e) {
      alert(`Error sending push: ${e.message}`);
    }
  };

  // Group tasks by client
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.client]) acc[task.client] = [];
    acc[task.client].push(task);
    return acc;
  }, {});
  
  const totalNotifiable = tasks.filter(t => !t.done && t.notify).length;

  return (
    <>
      <div className="animate-fade-in glass-panel main-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1>Engineer Tasks</h1>
            <p className="subtitle">Manage constraints, components, and clients.</p>
          </div>
          <button 
            className="btn-icon" 
            title="Settings" 
            onClick={() => setShowSettings(true)}
            style={{background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px'}}
          >
            <CogIcon style={{width: '24px', height: '24px'}} />
          </button>
        </div>

      <form onSubmit={handleAddTask} className="input-group">
        <input 
          type="text" 
          className="input-field" 
          placeholder="What needs to be done?" 
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input 
          type="text" 
          className="input-field" 
          placeholder="Client / Project (e.g. Acme Corp)" 
          style={{flex: '0.6', minWidth: '150px'}}
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          <PlusIcon style={{width: '20px', height: '20px'}} />
          Add
        </button>
      </form>

      {Object.keys(groupedTasks).length === 0 && (
        <div className="empty-state animate-slide-in">
          <div className="empty-icon">☕</div>
          <h3>All circuits are quiet.</h3>
          <p>No tasks currently pending.</p>
        </div>
      )}

      {Object.keys(groupedTasks).sort().map(client => {
        const clientTasks = groupedTasks[client];
        return (
          <div key={client} className="task-group animate-slide-in">
            <div className="task-group-header">
              <span className="client-badge">{client}</span>
            </div>
            
            {clientTasks.map(task => (
              <div key={task.id} className={`task-item ${task.done ? 'completed' : ''}`}>
                <label className="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    className="checkbox-input"
                    checked={task.done}
                    onChange={() => toggleTaskDone(task.id)}
                  />
                  <div className="checkbox-custom"></div>
                </label>
                
                <div className="task-content">
                  <div className="task-title">{task.title}</div>
                  <div className="task-meta">
                    <div 
                      className={`notify-toggle ${task.notify ? 'active' : ''}`}
                      onClick={() => toggleTaskNotify(task.id)}
                    >
                      <BellIcon className="notify-icon" />
                      {task.notify ? 'Include in Notify' : 'No Notify'}
                    </div>
                  </div>
                </div>
                
                <button 
                  className="btn-icon" 
                  onClick={() => deleteTask(task.id)}
                  title="Delete Task"
                >
                  <TrashIcon style={{width: '20px', height: '20px'}} />
                </button>
              </div>
            ))}
          </div>
        );
      })}

      <div className="summary-action">
        <div className="summary-info">
          <p><span>{totalNotifiable}</span> tasks marked for notification</p>
        </div>
        <button 
          className="btn-primary" 
          style={{background: 'var(--accent-secondary)'}}
          onClick={handleSendPushover}
          disabled={totalNotifiable === 0}
        >
          <PaperAirplaneIcon style={{width: '20px', height: '20px'}} />
          Send Pushover Summary
        </button>
      </div>
      </div>

      {showSettings && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowSettings(false)}>
          <div className="modal-content glass-panel animate-slide-in" onClick={e => e.stopPropagation()}>
            <h2>⚙️ Pushover Settings</h2>
            <p className="subtitle" style={{marginBottom: '1rem'}}>
              Configure your <a href="https://pushover.net/" target="_blank" rel="noreferrer" style={{color: 'var(--accent-primary)'}}>Pushover</a> keys to receive summaries directly on your device.
            </p>
            <div className="input-group" style={{flexDirection: 'column', gap: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Application API Token</label>
                <input 
                  type="text" 
                  className="input-field" 
                  style={{width: '100%'}}
                  placeholder="e.g. atxyz..." 
                  value={pushoverToken}
                  onChange={e => setPushoverToken(e.target.value)}
                />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>User Group Key</label>
                <input 
                  type="text" 
                  className="input-field" 
                  style={{width: '100%'}}
                  placeholder="e.g. u4bq..." 
                  value={pushoverUser}
                  onChange={e => setPushoverUser(e.target.value)}
                />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem'}}>
              <button className="btn-primary" onClick={() => setShowSettings(false)}>
                Save Config
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
