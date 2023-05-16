let input = document.querySelector('.txt-input');
let content = document.querySelector('.content');
let clear = document.getElementsByClassName('.clear');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

input.addEventListener('keydown', handleCommand);

function handleCommand(event) {
    if(event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        content.innerHTML += `$ ${command}<br>`;
        executeCommand(command);
    }
}

function executeCommand(command) {
    switch (command) {
        case "config t":
            let configt = document.createElement('div');
            configt.classList.add('about-me');
            configt.innerHTML =
            `
            <span class="about-txt">Pour Passez en mode de configuration
              </div>
            `

            content.appendChild(configt);
            input.value = '';
            break;




            case "hostname":
            let hostname = document.createElement('div');
            hostname.classList.add('about-me');
            hostname.innerHTML =
            `
            <span class="about-txt">Pour Changer le nom de routeur executez la commande "  hostname 'kech name here' "
              </div>
            }
            `

            content.appendChild(hostname);
            input.value = '';
            break;


          case "no ip domain-lookup":
            let noipdomainlookup = document.createElement('div');
            noipdomainlookup.classList.add('about-me');
            noipdomainlookup.innerHTML =
            `
            <span class="about-txt">Pour Désactivez la recherche DNS
              </div>
            }
            `

            content.appendChild(noipdomainlookup);
            input.value = '';
            break;

          case "enable secret":
            let enablesecret = document.createElement('div');
            enablesecret.classList.add('about-me');
            enablesecret.innerHTML =
            `
            <span class="about-txt">Definir un password de Mode d'execution privilige aka mode root executez la commande "  enable secret 'kech password here' "
              </div>
            }
            `

            content.appendChild(enablesecret);
            input.value = '';
            break;

          case "conspass":
            let conspass = document.createElement('div');
            conspass.classList.add('about-me');
            conspass.innerHTML =
            `
            <span class="about-txt">Pour Definir un password pour acceder au console executez les commandes : <br>
            line con 0 <br>
            password PasswordExampleHere <br>
            login <br>
            exit <br>
              </div>
            }
            `

            content.appendChild(conspass);
            input.value = '';
            break;


          case "service password-encryption":
            let servicepasswordencryption = document.createElement('div');
            servicepasswordencryption.classList.add('about-me');
            servicepasswordencryption.innerHTML =
            `
            <span class="about-txt">Pour Chiffrez tous les mot de passe en clair 
              </div>
            `

            content.appendChild(servicepasswordencryption);
            input.value = '';
            break;

          case "vtypass":
            let vtypass = document.createElement('div');
            vtypass.classList.add('about-me');
            vtypass.innerHTML =
            `
            <span class="about-txt">Pour Definir un password pour VTY executez les commandes : <br>
            line vty 0 4<br>
            password PasswordExampleHere <br>
            login <br>
            exit <br>
              </div>
            }
            `

            content.appendChild(vtypass);
            input.value = '';
            break;

          case "interfaceconfig":
            let interfaceconfig = document.createElement('div');
            interfaceconfig.classList.add('about-me');
            interfaceconfig.innerHTML =
            `
            <span class="about-txt">Pour configurer l'interface de routeur g0/0 executez les commandes :<br>
            interface g0/0 <br>
            ip address 192.168.0.1 255.255.255.0 <br>
            no shutdown <br>
            
              </div>
            }
            `

            content.appendChild(interfaceconfig);
            input.value = '';
            break;


          case "interfacedescr":
            let interfacedescr = document.createElement('div');
            interfacedescr.classList.add('about-me');
            interfacedescr.innerHTML =
            `
            <span class="about-txt">Pour Configurer une description de l'interface de routeur g0/0<br>
            interface g0/0 (Pour changer le mode from config to configif et configurer l interfce g0/0)<br>
            Description DescriptionExampleHere<br>
            end<br>
            
              </div>
            }
            `

            content.appendChild(interfacedescr);
            input.value = '';
            break;

            case "copyconfig":
            let copyconfig = document.createElement('div');
            copyconfig.classList.add('about-me');
            copyconfig.innerHTML =
            `
            <span class="about-txt">Enregistrez la configuration en cours dans le fichier de configuration initiale <br>
            copy running-confing startup-config<br>
              </div>
            `

            content.appendChild(copyconfig);
            input.value = '';
            break;
          case "clock set":
            let clockset = document.createElement('div');
            clockset.classList.add('about-me');
            clockset.innerHTML =
            `
            <span class="about-txt">Réglage de l’horloge example clock set 12:00:00 25 may 2025
              </div>
            `

            content.appendChild(clockset);
            input.value = '';
            break;

          case "ping":
            let ping = document.createElement('div');
            ping.classList.add('about-me');
            ping.innerHTML =
            `
            <span class="about-txt">ping 'ip address of pc we want to send the ping'<br>
                        example: ping 192.168.1.1<br>
              </div>
            `

            content.appendChild(ping);
            input.value = '';
            break;

            case "show ip route":
            let showiproute = document.createElement('div');
            showiproute.classList.add('about-me');
            showiproute.innerHTML =
            `
            <span class="about-txt">Affichez la table de routage sur le routeur
                       
              </div>
            `

            content.appendChild(showiproute);
            input.value = '';
            break;



            case "show version":
            let showversion = document.createElement('div');
            showversion.classList.add('about-me');
            showversion.innerHTML =
            `
            <span class="about-txt">
                      Afficher les informations sur le matériel et les logiciels
              </div>
            `

            content.appendChild(showversion);
            input.value = '';
            break;





            case "show interface":
            let showinterface = document.createElement('div');
            showinterface.classList.add('about-me');
            showinterface.innerHTML =
            `
            <span class="about-txt">Afficher les information d'une interfacer specifique for example :<br>
                      show interface 'InterfaceName'<br>
                      Example : show interface g0/1 <br>
              </div>
            `

            content.appendChild(showinterface);
            input.value = '';
            break;





            case "clockrate":
            let clockrate = document.createElement('div');
            clockrate.classList.add('about-me');
            clockrate.innerHTML =
            `
            <span class="about-txt">Ida 9alelkoum dirou configuraton te3 interface and he asked for the clockrate just do the same commands to config an interface brk zidoulha <br>
            clockrate 64000
              </div>
            `

            content.appendChild(clockrate);
            input.value = '';
            break;

          case "ip route":
            let iproute = document.createElement('div');
            iproute.classList.add('about-me');
            iproute.innerHTML =
            `
            <span class="about-txt">
            ajouter un reaseau a la table de routage
              </div>
            `

            content.appendChild(iproute);
            input.value = '';
            break;
        case "help":
            content.innerHTML += '<p class="dummy-txt">Available commands: <span class="cmd-txt">help</span>, <span class="cmd-txt">config t</span>,<span class="cmd-txt">hostname</span>, <span class="cmd-txt">no ip domain-lookup</span>,<span class="cmd-txt">enable secret</span>,<span class="cmd-txt">conspass</span>,<span class="cmd-txt">service password-encryption</span>,<span class="cmd-txt">vtypass</span>,<span class="cmd-txt">interfaceconfig</span>,<span class="cmd-txt">interfacedescr</span>,<span class="cmd-txt">copyconfig</span>,<span class="cmd-txt">clock set</span>,<span class="cmd-txt">ping</span>,<span class="cmd-txt">show interface</span>,<span class="cmd-txt">clockrate</span>,<span class="cmd-txt">iproute</span>,<span class="cmd-txt">show ip route</span>,<span class="cmd-txt">show version</span></p><br>';
            break;
        case "addToDo":
            content.innerHTML += "Enter task: <br>";
            input.removeEventListener('keydown', handleCommand);
            input.addEventListener('keydown', handleAddTask);
            break;
        case "removeToDo":
            content.innerHTML += "Enter a task number to remove: <br>";
            input.removeEventListener('keydown', handleCommand);
            input.addEventListener('keydown', handleRemoveTask);
            break;
        case "listToDo":
            if (todos.length === 0) {
                content.innerHTML += "No tasks<br>";
            }else {
                for(let i=0; i < todos.length; i++) {
                    content.innerHTML += `<span class="listed-task">${i + 1}. ${todos[i]}</span><br>`;
                }
            }
            break;
        case "clear":
            setTimeout(function() {
                content.innerHTML = '<a id="clear"></a>';
                before = document.getElementById("clear");
              }, 1);
            break;
        case "aboutMe":
            let aboutMe = document.createElement('div');
            aboutMe.classList.add('about-me');
            aboutMe.innerHTML =
            `
            <span class="about-txt">Hello visitor,<br> My name is Tufo. I am a web developer who is fairly new at this,<br>
            but i do my best to create fun web sites like this one . I also <br>
            make youtube videos about my journey, so i can get feedback about <br>
            my project because like i said I am fairly new at this, I make my<br> 
            websites with HTML CSS and JavaScript. Hope you enjoyed this website.<br>
            You can check my youtube channel here: <a href="https://www.youtube.com/channel/UCcvan4b4UrAXDT3mPv5hbuw" target="_blank">https://www.youtube.com/channel/UCcvan4b4UrAXDT3mPv5hbuw</a>.<br>
            You can also check my GitHub page here: <a href="https://github.com/TufoT" target="_blank">https://github.com/TufoT</a><br>
              </div>
            `

            content.appendChild(aboutMe);
            input.value = '';
            break;
            case "enable":
            let enable = document.createElement('div');
            enable.classList.add('about-me');
            enable.innerHTML =
            `
            <span class="about-txt">Accédez au routeur par la console et activez le mode d’exécution privilégié.
              </div>
            `

            content.appendChild(enable);
            input.value = '';
            break;
          case "updates":
            let updates = document.createElement('div');
            updates.classList.add('about-me');
            updates.innerHTML =
            `
            <span class="about-txt"> 
            Updates:<br>
            Commands: Updates it displays the added updates to my todo-list .<br>
            Other Updates: added localStorage to the todos so they do not get deleted when refreshed<br>
            or when you leave the pade .
            </span>
            `

            content.appendChild(updates);
            input.value = '';
          break;
        default:
            content.innerHTML += `Unknown command: ${command}, for a list of commands type help.<br>`;
    }
}

function handleAddTask(event) {
    if (event.key === "Enter") {
      const task = input.value.trim();
      if (task !== "") {
        todos.push(task);
        content.innerHTML += `<span class="added-task">Task added: ${task}</span><br>`;
        input.value = '';  

        localStorage.setItem('todos', JSON.stringify(todos));
      }
      input.removeEventListener("keydown", handleAddTask);
      input.addEventListener("keydown", handleCommand);
    }
  }

  function handleRemoveTask(event) {
    if (event.key === "Enter") {
      const index = parseInt(input.value) - 1;
      if (isNaN(index) || index < 0 || index >= todos.length) {
        content.innerHTML += "Invalid task number<br>";
        input.value = '';
      } else {
        const task = todos[index];
        todos.splice(index, 1);
        content.innerHTML += `<span class="removed-task">Task removed: ${task}</span><br>`;
        input.value = '';

        localStorage.setItem('todos', JSON.stringify(todos));
      }
      input.removeEventListener("keydown", handleRemoveTask);
      input.addEventListener("keydown", handleCommand);
    }
  }