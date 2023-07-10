import {FaJava, FaReact, FaAws, FaDocker, FaGithub} from 'react-icons/fa';
import {SiSpring, SiUbuntu, SiApachetomcat, SiVisualstudiocode, SiEclipseide, SiNginx, SiMysql, SiOracle, SiSpringboot, SiJavascript, SiJquery, SiBootstrap, SiApachecordova} from 'react-icons/si';
import {AiOutlineHtml5, AiOutlineAndroid} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';
const skill = 
{
    "frontEnd":[
        {
            id: 1,
            content : <span><FaReact/> React</span>
        },
        {
            id: 2,
            content : <span><AiOutlineHtml5/> HTML5</span>
        },
        {
            id: 3,
            content : <span><TbBrandCss3/> CSS3</span>
        },
        {
            id: 4,
            content : <span><SiJavascript/> JavaScript</span>
        },
        {
            id: 5,
            content : <span><SiJquery/> jQuery</span>
        },
        {
            id: 6,
            content : <span><SiBootstrap/> Bootstrap</span>
        },
        {
            id: 7,
            content : <span><AiOutlineAndroid/> Android Studio</span>
        },
        {
            id: 8,
            content : <span><SiApachecordova/> Apache Cordova</span>
        }
    ],
    "backEnd":[
        {
            id: 1,
            content : <span><FaJava/> Java</span>
        },
        {
            id: 2,
            content : <span><SiSpring/> Spring</span>
        },
        {
            id: 3,
            content : <span><SiSpringboot/> Springboot</span>
        }
    ],
    "database":[
        {
            id: 1,
            content : <span><SiMysql/> MySQL</span>
        },
        {
            id: 2,
            content : <span><SiOracle/> Oracle DB</span>
        }
    ],
    "server":[
        {
            id: 1,
            content : <span><FaAws/> Amazon AWS</span>
        },
        {
            id: 2,
            content : <span><SiOracle/> Oracle Cloud</span>
        },
        {
            id: 3,
            content : <span><SiUbuntu/> Ubuntu</span>
        },
        {
            id: 4,
            content : <span><FaDocker/> Docker</span>
        },
        {
            id: 5,
            content : <span><SiNginx/> NginX</span>
        },
    ],
    "tools":[
        {
            id: 1,
            content : <span><SiEclipseide/> Eclipse IDE</span>
        },
        {
            id: 2,
            content : <span><SiSpring/> Spring Tool Suite</span>
        },
        {
            id: 3,
            content : <span><SiVisualstudiocode/> Visual Studio Code</span>
        },
        {
            id: 4,
            content : <span><SiApachetomcat/> Apache Tomcat</span>
        },
        {
            id: 5,
            content : <span><FaGithub/> Github</span>
        },
        {
            id: 6,
            content : <span><SiNginx/> NginX Proxy Manager</span>
        }
    ]
}
export default skill;