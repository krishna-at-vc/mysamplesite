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
public class SustainabilityFeature {
    
    @ValueMapValue
    private String tag;
    
    @ValueMapValue
    private String heading;
    
    @ValueMapValue
    private String description;
    
    @ValueMapValue
    private String ctaText;
    
    @ValueMapValue
    private String ctaLink;
    
    @ValueMapValue
    private String backgroundImage;
    
    @ChildResource
    private List<SustainabilityMetric> metrics;
    
    public String getTag() {
        return tag;
    }
    
    public String getHeading() {
        return heading;
    }
    
    public String getDescription() {
        return description;
    }
    
    public String getCtaText() {
        return ctaText;
    }
    
    public String getCtaLink() {
        return ctaLink;
    }
    
    public String getBackgroundImage() {
        return backgroundImage;
    }
    
    public List<SustainabilityMetric> getMetrics() {
        return metrics;
    }
    
    public boolean isEmpty() {
        return heading == null && description == null;
    }
} 