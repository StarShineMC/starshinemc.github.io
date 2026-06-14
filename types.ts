import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

