import { ReactElement, lazy } from 'react';
import {
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
    ResourceProps,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PostList from './posts/PostList';
import PostEdit from './posts/PostEdit';
import PostCreate from './posts/PostCreate';

const resources: ResourceProps[] = [
    {
        name: 'posts',
        list: lazy(() => import('./posts/PostList')),
        edit: lazy(() => import('./posts/PostEdit')),
        create: lazy(() => import('./posts/PostCreate')),
        show: lazy(() =>
            import('react-admin').then(m => ({ default: m.ShowGuesser }))
        ),
        icon: BookIcon,
        recordRepresentation: 'title',
    },
    {
        name: 'comments',
        list: lazy(() =>
            import('react-admin').then(m => ({ default: m.ListGuesser }))
        ),
        edit: lazy(() =>
            import('react-admin').then(m => ({ default: m.EditGuesser }))
        ),
        show: lazy(() =>
            import('react-admin').then(m => ({ default: m.ShowGuesser }))
        ),
        icon: ChatBubbleIcon,
    },
    {
        name: 'tags',
        recordRepresentation: tag => tag.name.en,
    },
];

export default resources;
