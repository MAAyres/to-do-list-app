import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// SVG Icons
const BellIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const TrashIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const PlusIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const PaperAirplaneIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="2" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const CogIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.341 3.897c.287-1.42 2.03-1.42 2.318 0 .151.748.974 1.255 1.706 1.053.714-.197 1.488.293 1.666.993.18.706.87 1.157 1.58.972.738-.192 1.463.36 1.579 1.111.112.724.795 1.196 1.518 1.055.76-.148 1.34.469 1.408 1.229.065.733.67 1.258 1.396 1.22.766-.04 1.22.656 1.127 1.405-.09.723.368 1.353 1.055 1.442.75.097 1.026.852.816 1.554-.202.673.125 1.385.76 1.636.65.257.755 1.066.398 1.71-.343.619-.208 1.37.337 1.78.563.425.485 1.218-.088 1.794-.555.556-.554 1.365.176 1.834.757.48.51 1.298-.222 1.758-.707.447-.98 1.062-1.282 1.722-.313.684.148 1.44-.57 1.747-.696.297-1.212.836-1.503 1.439-.302.624-1.042.846-1.74.453-.615-.347-1.393-.112-1.798.487-.418.618-1.246.736-1.84.214-.576-.505-1.378-.456-1.879.13-.518.607-1.34.502-1.875-.152-.516-.628-1.1-1.12-1.332-.478-.224-1.026.113-1.46.216-.421.099-1.077-.423-1.09-1.218-.013-1.015-1.015-1.015-2.03 0-.013.795-.669 1.317-1.09 1.218-.434-.103-.982-.44-1.46-.216-.492.232-.816.816-1.332 1.12-.535.315-1.357.518-1.875.13-.501-.326-1.303-.375-1.879-.13-.594.273-1.422.155-1.84-.214-.405-.359-1.183-.594-1.798-.487-.714.126-1.454-.347-1.74-.453-.29-.106-.827-.643-1.503-1.439-.66-.318-1.42-.515-1.747-.696-.306-.168-1.04-.633-1.758-.707-.468-.049-1.272.73-1.834.176-.575-.572-.651-1.369-.088-1.794.545-.41.68-1.161.337-1.78-.357-.644-.252-1.453.398-1.71.635-.251.962-.963.76-1.636-.21-.702.066-1.457.816-1.554.687-.089 1.145-.719 1.055-1.442-.093-.749.36-1.445 1.127-1.405.726.038 1.331-.487 1.396-1.22.068-.76.648-1.377 1.408-1.229.723.141 1.406-.331 1.518-1.055.116-.751.841-1.303 1.579-1.111.71.185 1.4-.266 1.58-.972.178-.7.952-1.19 1.666-.993.732.202 1.555-.305 1.706-1.053z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FolderIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
  </svg>
);

const BuildingOfficeIcon = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} style={style} strokeWidth="1.5" stroke="currentColor" fill="none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

function App() {
  const [companies, setCompanies] = useState([]);
  const [isLoadingKV, setIsLoadingKV] = useState(true);

  const [newCompanyName, setNewCompanyName] = useState('');
  
  // Settings modal state
  const [showSettings, setShowSettings] = useState(false);
  const [pushoverToken, setPushoverToken] = useState(() => localStorage.getItem('pushover-token') || '');
  const [pushoverUser, setPushoverUser] = useState(() => localStorage.getItem('pushover-user') || '');
  const [autoNotify, setAutoNotify] = useState(() => localStorage.getItem('pushover-autonotify') === 'true');
  const [notifyTime, setNotifyTime] = useState(() => localStorage.getItem('pushover-notifytime') || '18:00');

  // Input states for dynamically adding projects and tasks (we simply key them by parent ID)
  const [newProjectInputs, setNewProjectInputs] = useState({});
  const [newTaskInputs, setNewTaskInputs] = useState({});

  const companiesRef = useRef(companies);

  // Sync refs to state for interval
  useEffect(() => {
    companiesRef.current = companies;
    // We keep local storage sync as a reliable offline browser cache
    localStorage.setItem('engineer-companies', JSON.stringify(companies));

    // Debounce the API push to respect Vercel Serverless/KV limits
    if (isLoadingKV) return;
    
    const timeout = setTimeout(async () => {
       try {
         await fetch('/api/saveTasks', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ companies })
         });
       } catch (e) {
         console.warn("Failed to sync to cloud. The app is still working via local storage.", e);
       }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [companies, isLoadingKV]);

  // Initial Fetch Mount
  useEffect(() => {
    let isMounted = true;
    const fetchRemoteTasks = async () => {
      try {
        const response = await fetch('/api/getTasks');
        if (response.ok) {
           const data = await response.json();
           if (data.companies && Array.isArray(data.companies) && isMounted) {
             setCompanies(data.companies);
             setIsLoadingKV(false);
             return;
           }
        }
      } catch (e) {
        console.warn("Could not fetch remote tasks, falling back to local...", e);
      }
      
      const savedCompanies = localStorage.getItem('engineer-companies');
      if (savedCompanies && isMounted) {
         setCompanies(JSON.parse(savedCompanies));
      } else if (isMounted) {
         setCompanies([
           {
             id: 'c1',
             name: 'Acme Corp',
             projects: [{
               id: 'p1',
               name: 'Controller Board V2',
               tasks: [
                 { id: 't1', title: 'Review schematic', done: false, notify: true },
                 { id: 't2', title: 'Order components batch', done: false, notify: false }
               ]
             }]
           }
         ]);
      }
      if (isMounted) setIsLoadingKV(false);
    };

    fetchRemoteTasks();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    localStorage.setItem('pushover-token', pushoverToken);
    localStorage.setItem('pushover-user', pushoverUser);
    localStorage.setItem('pushover-autonotify', autoNotify.toString());
    localStorage.setItem('pushover-notifytime', notifyTime);
  }, [pushoverToken, pushoverUser, autoNotify, notifyTime]);

  const handleSendPushover = async (isAuto = false) => {
    let notifiableCount = 0;
    let messageString = "Remaining Tasks Summary:\n\n";

    companiesRef.current.forEach(company => {
      let companyHasTasks = false;
      let companyMessage = "";

      company.projects.forEach(project => {
        const pendingNotifiable = project.tasks.filter(t => !t.done && t.notify);
        if (pendingNotifiable.length > 0) {
          companyHasTasks = true;
          notifiableCount += pendingNotifiable.length;
          companyMessage += ` [Project] ${project.name}:\n`;
          pendingNotifiable.forEach(task => {
            companyMessage += `   - ${task.title}\n`;
          });
        }
      });

      if (companyHasTasks) {
        messageString += `** ${company.name} **\n${companyMessage}\n`;
      }
    });

    if (notifiableCount === 0) {
      if (!isAuto) alert("No pending tasks marked for notification.");
      return;
    }

    if (!pushoverToken || !pushoverUser) {
      if (!isAuto) {
        alert("Please configure your Pushover Token and User Key in Settings first.");
        setShowSettings(true);
      }
      return;
    }

    try {
      const formData = new FormData();
      formData.append("token", pushoverToken);
      formData.append("user", pushoverUser);
      formData.append("message", messageString.trim());
      formData.append("title", "Engineer Tasks Summary");
      
      await fetch('https://api.pushover.net/1/messages.json', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      if (!isAuto) {
        alert("Notification summary sent to Pushover successfully! (Check your phone)");
      } else {
        console.log("Auto-notification sent at", new Date().toLocaleTimeString());
      }
    } catch (e) {
      if (!isAuto) alert(`Error sending push: ${e.message}`);
    }
  };

  // Automated Notifications Interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoNotify || !notifyTime || !pushoverToken || !pushoverUser) return;
      
      const now = new Date();
      const [hh, mm] = notifyTime.split(':').map(Number);
      
      if (now.getHours() === hh && now.getMinutes() === mm) {
        const todayStr = now.toDateString();
        const lastSent = localStorage.getItem('pushover-lastsent-date');
        
        if (lastSent !== todayStr) {
          handleSendPushover(true);
          localStorage.setItem('pushover-lastsent-date', todayStr);
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [autoNotify, notifyTime, pushoverToken, pushoverUser]);

  // Actions
  const handleAddCompany = (e) => {
    e.preventDefault();
    if (!newCompanyName.trim()) return;
    
    setCompanies([...companies, {
      id: 'c_' + Date.now(),
      name: newCompanyName.trim(),
      projects: []
    }]);
    setNewCompanyName('');
  };

  const handleAddProject = (companyId) => {
    const projName = newProjectInputs[companyId];
    if (!projName || !projName.trim()) return;

    setCompanies(companies.map(c => {
      if (c.id === companyId) {
        return {
          ...c,
          projects: [...c.projects, {
            id: 'p_' + Date.now(),
            name: projName.trim(),
            tasks: []
          }]
        };
      }
      return c;
    }));
    
    setNewProjectInputs(prev => ({...prev, [companyId]: ''}));
  };

  const handleAddSubtask = (companyId, projectId) => {
    const taskTitle = newTaskInputs[projectId];
    if (!taskTitle || !taskTitle.trim()) return;

    setCompanies(companies.map(c => {
      if (c.id === companyId) {
        return {
          ...c,
          projects: c.projects.map(p => {
            if (p.id === projectId) {
              return {
                ...p,
                tasks: [...p.tasks, {
                  id: 't_' + Date.now(),
                  title: taskTitle.trim(),
                  done: false,
                  notify: true
                }]
              };
            }
            return p;
          })
        };
      }
      return c;
    }));

    setNewTaskInputs(prev => ({...prev, [projectId]: ''}));
  };

  const toggleTaskDone = (companyId, projectId, taskId) => {
    setCompanies(companies.map(c => c.id === companyId ? {
      ...c,
      projects: c.projects.map(p => p.id === projectId ? {
        ...p,
        tasks: p.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t)
      } : p)
    } : c));
  };

  const toggleTaskNotify = (companyId, projectId, taskId) => {
    setCompanies(companies.map(c => c.id === companyId ? {
      ...c,
      projects: c.projects.map(p => p.id === projectId ? {
        ...p,
        tasks: p.tasks.map(t => t.id === taskId ? { ...t, notify: !t.notify } : t)
      } : p)
    } : c));
  };

  const deleteTask = (companyId, projectId, taskId) => {
    setCompanies(companies.map(c => c.id === companyId ? {
      ...c,
      projects: c.projects.map(p => p.id === projectId ? {
        ...p,
        tasks: p.tasks.filter(t => t.id !== taskId)
      } : p)
    } : c));
  };

  const deleteProject = (companyId, projectId) => {
    setCompanies(companies.map(c => c.id === companyId ? {
      ...c,
      projects: c.projects.filter(p => p.id !== projectId)
    } : c));
  };

  const deleteCompany = (companyId) => {
    setCompanies(companies.filter(c => c.id !== companyId));
  };

  let totalNotifiable = 0;
  companies.forEach(c => {
    c.projects.forEach(p => {
      p.tasks.forEach(t => {
        if (!t.done && t.notify) totalNotifiable++;
      });
    });
  });

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

        <form onSubmit={handleAddCompany} className="input-group" style={{ marginBottom: '3rem' }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Add a new Company or Client..." 
            value={newCompanyName}
            onChange={(e) => setNewCompanyName(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            <BuildingOfficeIcon style={{width: '20px', height: '20px'}} />
            Add Company
          </button>
        </form>

        {companies.length === 0 && (
          <div className="empty-state animate-slide-in">
            <div className="empty-icon">☕</div>
            <h3>All circuits are quiet.</h3>
            <p>No tasks currently pending.</p>
          </div>
        )}

        {companies.map(company => (
          <div key={company.id} className="task-group animate-slide-in">
            <div className="company-header">
              <h3 className="company-title">
                <BuildingOfficeIcon style={{width: '24px', height: '24px'}} />
                {company.name}
              </h3>
              <div className="inline-form">
                <input 
                  type="text" 
                  className="hierarchy-input-sm" 
                  placeholder="New Project Name..." 
                  value={newProjectInputs[company.id] || ''}
                  onChange={(e) => setNewProjectInputs({...newProjectInputs, [company.id]: e.target.value})}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddProject(company.id); } }}
                />
                <button className="hierarchy-add-btn" onClick={() => handleAddProject(company.id)}>
                  <PlusIcon style={{width: '16px', height: '16px'}} /> Project
                </button>
                <button className="btn-icon" onClick={() => deleteCompany(company.id)} title="Delete Company">
                  <TrashIcon style={{width: '20px', height: '20px'}} />
                </button>
              </div>
            </div>
            
            {company.projects.map(project => (
              <div key={project.id} className="project-group">
                <div className="project-header">
                  <div className="project-title" style={{display: 'flex', alignItems:'center', gap:'0.5rem'}}>
                    <FolderIcon style={{width: '20px', height: '20px', color: 'var(--text-muted)'}} />
                    {project.name}
                  </div>
                  <div className="inline-form">
                    <input 
                      type="text" 
                      className="hierarchy-input-sm" 
                      placeholder="New Subtask..." 
                      value={newTaskInputs[project.id] || ''}
                      onChange={(e) => setNewTaskInputs({...newTaskInputs, [project.id]: e.target.value})}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSubtask(company.id, project.id); } }}
                    />
                    <button className="hierarchy-add-btn" onClick={() => handleAddSubtask(company.id, project.id)}>
                      <PlusIcon style={{width: '16px', height: '16px'}} /> Task
                    </button>
                    <button className="btn-icon" onClick={() => deleteProject(company.id, project.id)} title="Delete Project">
                      <TrashIcon style={{width: '18px', height: '18px'}} />
                    </button>
                  </div>
                </div>

                {project.tasks.map(task => (
                  <div key={task.id} className={`task-item ${task.done ? 'completed' : ''}`}>
                    <label className="checkbox-wrapper">
                      <input 
                        type="checkbox" 
                        className="checkbox-input"
                        checked={task.done}
                        onChange={() => toggleTaskDone(company.id, project.id, task.id)}
                      />
                      <div className="checkbox-custom"></div>
                    </label>
                    
                    <div className="task-content">
                      <div className="task-title">{task.title}</div>
                      <div className="task-meta">
                        <div 
                          className={`notify-toggle ${task.notify ? 'active' : ''}`}
                          onClick={() => toggleTaskNotify(company.id, project.id, task.id)}
                        >
                          <BellIcon className="notify-icon" />
                          {task.notify ? 'Include in Notify' : 'No Notify'}
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="btn-icon" 
                      onClick={() => deleteTask(company.id, project.id, task.id)}
                      title="Delete Subtask"
                    >
                      <TrashIcon style={{width: '20px', height: '20px'}} />
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

        <div className="summary-action">
          <div className="summary-info">
            <p><span>{totalNotifiable}</span> tasks marked for notification</p>
          </div>
          <button 
            className="btn-primary" 
            style={{background: 'var(--accent-secondary)'}}
            onClick={() => handleSendPushover(false)}
            disabled={totalNotifiable === 0}
          >
            <PaperAirplaneIcon style={{width: '20px', height: '20px'}} />
            Send Summary Now
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowSettings(false)}>
          <div className="modal-content glass-panel animate-slide-in" onClick={e => e.stopPropagation()}>
            <h2>⚙️ Notification Settings</h2>
            <p className="subtitle" style={{marginBottom: '1rem'}}>
              Configure your <a href="https://pushover.net/" target="_blank" rel="noreferrer" style={{color: 'var(--accent-primary)'}}>Pushover</a> keys to receive summaries.
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
              
              <div style={{marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)'}}>
                <label className="checkbox-wrapper settings-checkbox-row">
                  <input 
                    type="checkbox" 
                    className="checkbox-input"
                    checked={autoNotify}
                    onChange={(e) => setAutoNotify(e.target.checked)}
                  />
                  <div className="checkbox-custom" style={{position:'relative', width:'24px', height:'24px'}}></div>
                  <span style={{color: 'var(--text-main)', fontWeight: '500'}}>Enable Auto-Daily Summary</span>
                </label>
                
                {autoNotify && (
                  <div style={{marginTop: '1rem', marginLeft: '2.5rem', animation: 'fadeIn 0.3s'}}>
                    <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Time to Send</label>
                    <input 
                      type="time" 
                      className="input-field" 
                      value={notifyTime}
                      onChange={e => setNotifyTime(e.target.value)}
                    />
                  </div>
                )}
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
