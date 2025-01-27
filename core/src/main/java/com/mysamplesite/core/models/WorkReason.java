package com.mysamplesite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class WorkReason {
    
    @ValueMapValue
    private String title;
    
    @ValueMapValue
    private boolean isHighlighted;
    
    public String getTitle() {
        return title;
    }
    
    public boolean getIsHighlighted() {
        return isHighlighted;
    }
} 