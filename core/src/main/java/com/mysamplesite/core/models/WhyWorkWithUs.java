package com.mysamplesite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import java.util.List;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class WhyWorkWithUs {
    
    @ValueMapValue
    private String heading;
    
    @ValueMapValue
    private String description;
    
    @ChildResource
    private List<WorkReason> reasons;
    
    public String getHeading() {
        return heading;
    }
    
    public String getDescription() {
        return description;
    }
    
    public List<WorkReason> getReasons() {
        return reasons;
    }
    
    public boolean isEmpty() {
        return heading == null && reasons == null;
    }
} 