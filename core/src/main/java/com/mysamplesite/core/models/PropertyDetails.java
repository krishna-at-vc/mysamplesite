package com.mysamplesite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class PropertyDetails {
    
    @ValueMapValue
    private String assetType;
    
    @ValueMapValue
    private String yearBuilt;
    
    @ValueMapValue
    private String assetLocation;
    
    @ValueMapValue
    private String siteArea;
    
    @ValueMapValue
    private String lettableArea;
    
    @ValueMapValue
    private String adjustedLettableArea;
    
    @ValueMapValue
    private String typicalFloorArea;
    
    // Getters
    public String getAssetType() {
        return assetType;
    }
    
    public String getYearBuilt() {
        return yearBuilt;
    }
    
    public String getAssetLocation() {
        return assetLocation;
    }
    
    public String getSiteArea() {
        return siteArea;
    }
    
    public String getLettableArea() {
        return lettableArea;
    }
    
    public String getAdjustedLettableArea() {
        return adjustedLettableArea;
    }
    
    public String getTypicalFloorArea() {
        return typicalFloorArea;
    }
    
    // Helper method to check if component has content
    public boolean isEmpty() {
        return assetType == null && yearBuilt == null && assetLocation == null && 
               siteArea == null && lettableArea == null && adjustedLettableArea == null && 
               typicalFloorArea == null;
    }
} 