
import styled from 'styled-components';

export const GridContainer = styled.div` 
display: grid; 
grid-template-columns: 
repeat(4, 1fr); 
gap: 16px;
padding: 16px; `;

export const PostItem = styled.div` 
background-color: #f5f5f5; 
padding: 20px; 
border-radius: 8px; 
box-shadow: 1 2px 4px rgba(0, 0, 0, 0.2); 
text-align: center;   `;

export const PostsContainer = styled.div` 
display: grid; 
grid-template-columns: 
repeat(4, 1fr); 
gap: 16px; /* Adjust the gap between posts */ 
padding: 16px; `; // Style each post item `;

export const PostWrapper = styled.div` 
border-box; 
padding: 1rem; 
border: 1px solid #ddd; 
margin-bottom: 1rem; 
background-color: #f5f5f5; 
padding: 20px; 
border-radius: 8px; 
@media (max-width: 768px) { width: 100%; } `;

export const PostTitle = styled.h2` 
font-size: 1.2rem;
color: #BF4F74;
box-shadow: 1 2px 2px rgba(0, 0, 0, 0.2); 
margin-bottom: 0.5rem; `;
export const PostContent = styled.p` font-size: 1rem; `;
export const UserInfo = styled.div` 
font-size: 0.8rem; 
color: #555;
margin-top: 0.5rem; `;

export const PostLikes = styled.h2` 
font-size: 1.2rem;
color: #BF4F74;
box-shadow: 1 2px 2px rgba(0, 0, 0, 0.2); 
margin-bottom: 0.5rem; `;

export const PostViews = styled.h2` 
font-size: 1.2rem;
color: #BF4F74;
box-shadow: 1 2px 2px rgba(0, 0, 0, 0.2); 
margin-bottom: 0.5rem; `;

export const PostTags = styled.h2` 
font-size: 1.2rem;
color: #BF4F74;
margin-bottom: 0.5rem; `;