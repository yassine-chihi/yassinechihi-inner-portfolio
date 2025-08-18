import React from 'react';
import Window from '../os/Window';

export interface BlogProps extends WindowAppProps { }

const Blog: React.FC<BlogProps> = (props) => {
    return (
        <Window
            top={48}
            left={48}
            width={1100}
            height={800}
            windowTitle="Blog"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2025 Yassine Chihi'}
        >
            <div className="site-page">
                <h1>Blog</h1>
                <p>
                    I'm currently working on a blog about my experiences and
                    learnings.
                </p>
            </div>
        </Window>
    );
};

export default Blog;